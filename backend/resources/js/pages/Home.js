import React, { useState, useEffect }　from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MainTable from '../components/MainTable';
import axios from 'axios';
import { grep } from 'jquery';


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
  
  
  
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
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