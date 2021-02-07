import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

function Community() { //invalid hook call error 때문에 function으로 구성
  const [Content, setContent] = useState({
    title: '',
    content: ''
  })
  const [viewContent, setViewContent] = useState([]);
  const getValue = e => {
    const { name, value } = e.target;
    setContent({ //Content 의 내용을 복사해서 그 안에 name이라는 이름의 키의 값을 value로 바꿔 저장
      ...Content,
      [name]: value
    }) //리액트에서는 값을 직접 수정하면 안되기때문에 다음과 같이 복사해서 수정하는 방식을 이용
  };

  return (
    <div className="community"> 
      <h4>커뮤니티</h4>
      <div className='community_container'>
        {viewContent.map(element=>
          <div>
            <h5>{element.title}</h5>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='community_form'>
        <h5>게시글 작성</h5>
        <input className="form-title" type='text' placeholder='제목' onChange={getValue} name='title'/>
        <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setContent({
            ...Content,
            content: data
          })
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
        />        
      </div>
      <button className="form-submit" onClick={()=>{setViewContent(viewContent.concat({...Content}))}}>입력</button>
    </div>
  );
}

export default Communityform;