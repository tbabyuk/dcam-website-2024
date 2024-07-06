




export const ArticleImage = ({url, alt, bottom}) => {
    return (
      <div className={`grid place-items-center px-5 lg:px-36 xl:px-64 py-12 ${bottom ? bottom : "mb-10"}`}>
          <img src={url} alt={alt} className="rounded-lg" style={{width: "500px"}} />
      </div>
    )
  }