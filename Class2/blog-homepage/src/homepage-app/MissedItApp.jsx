import MissedItArticle from "./MissedItArticle"

function MissedItApp() {
  const header = "In case you missed it"

  return (
    <>
      <h2>{header}</h2>
      <hr/>
      <MissedItArticle />
    </>
  )
}

export default MissedItApp
