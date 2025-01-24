import PropTypes from "prop-types";
import Picture from './PreviewPicture';
import AuthorPicture from "./AuthorPicture";
import BookmarkIcon from "./BookmarkIcon";
import yourArticles from './your-articles.json';
import AudioAvailable from "./AudioAvailable";
import DateConversion from "./DateConversion";

function ForYouArticle() {
  const articleAlt = 'Preview image of article'
  const authorAlt = 'Small round image of the author'
  const bookmarkImage = 'https://cdn-icons-png.flaticon.com/512/494/494568.png'
  const bookmarkAlt = 'Small icon of a bookmark'

  return (
    <section className="for-you">
      {yourArticles.map( (yourArticles, index) => (
        <div className="eachArticle" key={index} style={{display: 'inline-block'}}>

          <Picture imgSrc={yourArticles.image} imgAlt={articleAlt} />

          <div className="articleInfo">
            <AudioAvailable booleanValue={yourArticles.hasAudioAvailable}/>
            <h2>{yourArticles.title}</h2>
            <p>{yourArticles.description}</p>

            <div className="bottomOfDiv">
              <AuthorPicture className="authorPic" imgSrc={yourArticles.author.image} imgAlt={authorAlt} />
              <h4>{yourArticles.author.name}</h4>
              <DateConversion date={yourArticles.postedDate}/> • {yourArticles.minutesToRead} min read
              <BookmarkIcon imgSrc={bookmarkImage} imgAlt={bookmarkAlt} />
            </div>

          </div>
        </div>
      ))}
    </section>
  )
}

Picture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

AudioAvailable.propTypes = {
  booleanValue: PropTypes.bool.isRequired,
}

DateConversion.propTypes = {
  date: PropTypes.string.isRequired,
}

export default ForYouArticle
