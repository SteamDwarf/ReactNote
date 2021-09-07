import {React, useState} from "react";
import MySelect from "../UI/MySelect";
import MyInput from "../UI/MyInput";

function PostVieweControl(props) {
    const [curSortOption, setCurSortOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const sortOptions = [
        {value: 'title', text: 'заголовку'},
        {value: 'body', text: 'описанию'}
    ];

    function changeSortOption(value) {
        setCurSortOption(value);
        props.changePostOrder(value);
    }
    function searchPosts(value) {
        setSearchValue(value);
        props.findPosts(value);
    }

    return (
        <div className={"post-viewe_block"}>
            <MySelect
                curSortOption={curSortOption} 
                changeSortOption={changeSortOption} 
                options={sortOptions}
            />
            <MyInput 
                value={searchValue}
                placeholder={'Поиск'}
                onChange={e => searchPosts(e.target.value)}
                className={"searchInput"}
            />
        </div>

    );
};

export default PostVieweControl;