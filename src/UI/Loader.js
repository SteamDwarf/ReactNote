import classes from './Loader.module.css';

function Loader() {
    return (
        <div className={classes.loaderBlock}>
            <h1 className={"post-list_title"}>Посты загружаются...</h1>
            <div className={classes.loader}></div>
        </div>
    );
}

export default Loader;