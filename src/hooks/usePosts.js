import {useMemo} from 'react';

export const useSortedPosts = (posts, curSortOption) => {
    const sortedPosts = useMemo(() => {
        return ([...posts].sort((a,b) => a[curSortOption].localeCompare(b[curSortOption])));
    }, [posts, curSortOption]);

    return sortedPosts;
}

export const useSortedAndFilteredPosts = (postFilter, posts, curSortOption) => {
    const sortedPosts = useSortedPosts(posts, curSortOption);
    const sortedAndFilteredPosts = useMemo(() => {
        let findedPosts = [];
        if(postFilter === '') {
          findedPosts = sortedPosts;
        } else {
          sortedPosts.forEach(post => {
            let postTitle = post.title.toLowerCase();
            let postBody = post.body.toLowerCase();
            if(postTitle.includes(postFilter) || postBody.includes(postFilter)) {
              findedPosts.push(post);
            }
          });
        }
        return findedPosts;
    }, [postFilter, posts]);

    return sortedAndFilteredPosts;
}
