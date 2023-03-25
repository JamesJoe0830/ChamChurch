// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const Users = () => {

//     //상태관리하기
//     // 1.요청의 결과
//     // 2.로딩상태
//     // 3.에러
//     const [users, setUsers] = useState(null);
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);
//     const fetchUsers = async () => {
//         try {
//             //users초기화, error초기화, loading은 true
//             setUsers(null);
//             setError(null);
//             setLoading(true);
//             const response = await axios.get(
//                 'https://192.168.1.141:3000/logo/charmjoeun/'
//             );
//             setUsers(response.data);
//         }
//         catch (e) {
//             //에러번호를 확인하고 싶을때 
//             console.log(e.response.status)
//             setError(e);
//         }
//         setLoading(false);
//     }
//     //렌더링 될때 axios를 사용해서 데이터를 받음
//     useEffect(() => {

//         fetchUsers()
//     }, []);
//     //로딩중이라면?
//     if (loading) return < div > 로딩중...</div >
//     //에러가 발생했다면?
//     if (error) return <div>에러가 발생했습니다.</div>
//     if (!users) return null;
//     return (
//         <>
//             <ul>
//                 {users.map(user => (
//                     <li Hello></li>
//                 ))}
//             </ul>
//             <button onClick={fetchUsers}>다시 불러오기</button>
//         </>
//     )
// }
// export default Users;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.141:3000/logo/charmjoeun')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
        {/* 주윤 */}
    </div>
  );
}

export default MyComponent;

