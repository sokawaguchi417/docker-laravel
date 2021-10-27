import React, { useState, useEffect }　from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MainTable from '../components/MainTable';
import axios from 'axios';
import PostFrom from '../components/PostFrom';



//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
  card: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];


let rows = [
  {
    name: "モーリー",
    content: "肩トレ",
    editBtn: <Button color="secondary" variant="contained">編集</Button>,
    deleteBtn: <Button color="primary" variant="contained">完了</Button>,
  },{
    name: "ドンキーコング",
    content: "バナナ補充",
    editBtn: <Button color="secondary" variant="contained">編集</Button>,
    deleteBtn: <Button color="primary" variant="contained">完了</Button>,
  }
]

function Home() {
  
  
  //定義したスタイルを利用するための設定
  const classes = useStyles(); 
  
  //postsの状態を管理する
  const [posts, setPosts] = useState([]);


  // フォームの入力値を管理するステートの定義
  const [formData, setFormData] = useState({name:'', content:''});
  
   //画面に到着したらgetPostsDataを呼ぶ
  useEffect(() => {
    getPostsData();
    },[])


  const getPostsData = () => {
    // バックエンドからpostsの一覧を取得する処理
      axios
      .get('/api/posts')
      .then(response => {
          setPosts(response.data);     //バックエンドから返ってきたデータでpostsを更新する
          console.log(response.data);　//取得データ確認用のconsole.log()
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });   
  }

 //入力がされたら（都度）入力値を変更するためのfunction
      const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
      }

  const createPost = async() => {
    //空だと弾く
    if(formData == ''){
        return;
    }
    //入力値を投げる
    await axios
        .post('/api/post/create', {
            name: formData.name,
            content: formData.content
        })
        .then((res) => {
            //戻り値をtodosにセット
            const tempPosts = posts
            tempPosts.push(res.data);
            setPosts(tempPosts)
            setFormData('');
        })
        .catch(error => {
            console.log(error);
        });
}

  
  // 空配列を定義
  let rows = [];

  // posts要素ごとにrowsで使える形式に変換
  posts.map((post) =>
      rows.push({
          name: post.name,
          content: post.content,
          editBtn: <Button color="secondary" variant="contained" key={post.id} href={`/post/edit/${post.id}`}>編集</Button>,
          deleteBtn: <Button color="primary" variant="contained">削除</Button>,
      })
  );
  
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostFrom data={formData} btnFunc={createPost} inputChange={inputChange} />
                        </Card>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
                            <MainTable headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;