import React, { useEffect, useState } from 'react';

const Post = (props) => {
    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getProduto = async () => {
            await fetch(`https://api-frontmaster.vercel.app/pages/post/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then((response) => response.json())
                .then((responseJson) => {
                setData(responseJson.produto);
            });
        }
    getProduto();
  }, [id]);
  return (
    <div>
        {data.id}
    </div>
  )
}

export default Post;