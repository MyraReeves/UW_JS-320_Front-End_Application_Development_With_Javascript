// import PropTypes from "prop-types";
import Picture from './PreviewPicture'
import AuthorPicture from "./AuthorPicture";
import BookmarkIcon from "./BookmarkIcon";
import missedArticles from './missed-articles.json'

function MissedItArticle(props) {
  // const articlePreview = 'https://placehold.co/402x519'
  const articleAlt = 'Preview image of article'
  // const authorPic = 'https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png'
  const authorAlt = 'Small round image of the author'
  const bookmarkImage = 'https://cdn-icons-png.flaticon.com/512/494/494568.png'
  const bookmarkAlt = 'Small icon of a bookmark'

  return (
    <section className="missed-it">
      {missedArticles.map( (missedArticles, index) => (
        <div className="eachArticle" key={index} style={{display: 'inline-block'}}>
          <Picture imgSrc={missedArticles.image} imgAlt={articleAlt} />
          <div className="articleInfo">
            {/* <p>Audio available</p> */}
            <h2>{missedArticles.title}</h2>
            <p>{missedArticles.description}</p>
            <div className="bottomOfDiv">
              <AuthorPicture className="authorPic" imgSrc={missedArticles.author.image} imgAlt={authorAlt} />
              <h4>{missedArticles.author.name}</h4>
              <script>new Date({missedArticles.postedDate}).toDateString()</script> •
              Article length {missedArticles.minutesToRead}
              <BookmarkIcon imgSrc={bookmarkImage} imgAlt={bookmarkAlt} />
            </div>
          </div>
        </div>
      ))
      }
    </section>
  )
}

export default MissedItArticle
