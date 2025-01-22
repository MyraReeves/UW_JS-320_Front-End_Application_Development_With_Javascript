import PropTypes from "prop-types";
import Picture from './PreviewPicture'
import AuthorPicture from "./AuthorPicture";
import BookmarkIcon from "./BookmarkIcon";
import missedArticles from './missed-articles.json'
import MemberPreview from './MemberPreview';
import DateConversion from "./DateConversion";

function MissedItArticle() {
  const articleAlt = 'Preview image of article'
  const authorAlt = 'Small round image of the author'
  const bookmarkImage = 'https://cdn-icons-png.flaticon.com/512/494/494568.png'
  const bookmarkAlt = 'Small icon of a bookmark'

  return (
    <section className="missed-it">
      {missedArticles.map( (missedArticles, index) => (
        <div className="eachArticle" key={index} style={{display: 'inline-block'}}>
          <Picture imgSrc={missedArticles.image} imgAlt={articleAlt} />
          <div className="articleInfo">

            <MemberPreview boolean={missedArticles.memberPreview}/>

            <h2>{missedArticles.title}</h2>
            <p>{missedArticles.description}</p>
            <div className="bottomOfDiv">
              <AuthorPicture className="authorPic" imgSrc={missedArticles.author.image} imgAlt={authorAlt} />
              <h4>{missedArticles.author.name}</h4>

              <DateConversion date={missedArticles.postedDate}/> • {missedArticles.minutesToRead} min read
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

MemberPreview.propTypes = {
  booleanValue: PropTypes.bool.isRequired,
}

DateConversion.propTypes = {
  date: PropTypes.string.isRequired,
}

export default MissedItArticle
