import PropTypes from "prop-types";
import Picture from './PreviewPicture'
import AuthorPicture from "./AuthorPicture";
import BookmarkIcon from "./BookmarkIcon";
import yourArticles from './your-articles.json'

function ForYouArticle(props) {
  // const {itemToAdd, setItemToAdd, setTodos, todos} = props;
  // const articlePreview = 'https://placehold.co/402x519'
  const articleAlt = 'Preview image of article'
  // const authorPic = 'https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png'
  const authorAlt = 'Small round image of the author'
  const bookmarkImage = 'https://cdn-icons-png.flaticon.com/512/494/494568.png'
  const bookmarkAlt = 'Small icon of a bookmark'

  return (
    <section className="for-you">
      {yourArticles.map( (yourArticles, index) => (
        <div className="eachArticle" key={index} style={{display: 'inline-block'}}>
          <Picture imgSrc={yourArticles.image} imgAlt={articleAlt} />
          <div className="articleInfo">
            {/* <p>Audio available</p> */}
            <h2>{yourArticles.title}</h2>
            <p>{yourArticles.description}</p>
            <div className="bottomOfDiv">
              <AuthorPicture className="authorPic" imgSrc={yourArticles.author.image} imgAlt={authorAlt} />
              <h4>{yourArticles.author.name}</h4>
              <script>new Date({yourArticles.postedDate}).toDateString()</script> •
              Article length {yourArticles.minutesToRead}
              <BookmarkIcon imgSrc={bookmarkImage} imgAlt={bookmarkAlt} />
            </div>
          </div>
        </div>
      ))
      }
    </section>
  )
}

Picture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

export default ForYouArticle
