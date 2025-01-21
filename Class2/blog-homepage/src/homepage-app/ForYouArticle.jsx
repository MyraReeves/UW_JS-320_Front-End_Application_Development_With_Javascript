
import Picture from './PreviewPicture'
import AuthorPicture from "./AuthorPicture";

function ForYouArticle() {
  const articlePreview = 'https://placehold.co/402x519'
  const articleAlt = 'Preview image of article'
  const authorPic = 'https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png'
  const authorAlt = 'Small round image of the author'

  return (
    <section className="for-you">
      <Picture imgSrc={articlePreview} imgAlt={articleAlt} />
      <div>Audio available<br />
      <h2>Title</h2>
      Description
        <div className="bottomOfDiv">
          <AuthorPicture className="authorPic" imgSrc={authorPic} imgAlt={authorAlt} />
          <h4>authorName</h4>
          Article date •
          Article length
          {/* <Picture imgSrc={bookmark} imgAlt={imgAlt} /> */}
        </div>
      </div>
    </section>
  )
}

export default ForYouArticle
