




export default function BlogCard(){

    const postDate = new Date(Date.now());
    const day = postDate.getDate();
    const month = postDate.getMonth();
    const year = postDate.getFullYear();


    return(
        <div className={'flex flex-col min-w-[600px] drop-shadow-2xl mt-1 min-h-32 border gap-2 rounded-xl bg-[linear-gradient(to_bottom,_darkslategray,_black)]'}>
            <div className={'align-top items-left'}>
                <h1>{`${day}-${month}-${year}`}</h1>
            </div>
            <p>{''}</p>
        </div>
    );

}