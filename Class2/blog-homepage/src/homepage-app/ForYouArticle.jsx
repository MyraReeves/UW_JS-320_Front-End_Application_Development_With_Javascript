function ForYouArticle(props) {

  return (
    <section className="for-you">
      <Picture imgSrc={articlePreview} imgAlt={imgAlt} />
      <div>"Audio available"</div>
      <h2>Title</h2>
      <div>Description</div>
      <Picture imgSrc={authorPic} imgAlt={imgAlt} />
      <div>authorName</div>
      <div>Article date</div>
      <div>Article length</div>
      <Picture imgSrc={bookmark} imgAlt={imgAlt} />
    </section>
  )
}

export default ForYouArticle
