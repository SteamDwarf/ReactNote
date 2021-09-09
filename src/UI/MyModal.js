import React from 'react';
import PostForm from '../components/PostForm';
import styles from './MyModal.module.css';

function MyModal({posts, setPosts, modalState, setModalState}) {
    function addNewPost(newPost) {
        setPosts([...posts, newPost]);
    }

    if(modalState) {
        return (
            <div className={styles.modal}>
                <div className={styles['modal_form']}>
                    <div 
                        className={styles['modal_close']} 
                        onClick={() => setModalState(false)}
                    >
                        &#10006;
                    </div>
                    <PostForm addNewPost={addNewPost}/>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default MyModal;