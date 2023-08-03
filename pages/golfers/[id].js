import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import golferScores from '../../lib/golferScores'
import { useRouter } from 'next/router'


const Golfer = () => {
  const router = useRouter()
  const { id } = router.query
  const { golfer, error } = golferScores(id)
  if (!golfer) {
    return null
  }
  const { name, scores } = golfer
  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <ScorePostWidget />
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Golfer
