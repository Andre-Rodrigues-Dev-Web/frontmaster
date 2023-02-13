import React, { useEffect, useState } from 'react';

const Post = (props) => {
    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getProduto = async () => {
            await fetch(`../../api/post/${id}`)
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