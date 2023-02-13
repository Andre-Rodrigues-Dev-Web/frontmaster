import React, { useEffect, useState } from 'react';

const Post = () => {
    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    useEffect(() => {
        const getProduto = async () => {
            await fetch("../../api/post/" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                setData(responseJson.produto);
            });
        }
    getProduto();
  }, [id]);
  return (
    <div>index</div>
  )
}

export default Post;