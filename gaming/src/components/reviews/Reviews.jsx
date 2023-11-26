import styles from './reviews.module.css';


export default function Reviews() {
    return (
        <>
            <h3 className={styles['no-reviews']}>No reviews yet</h3>

            <div className={styles['review-wrapper']}>
                <p className={styles['reviewer-name']}>Name: Kristiyan Radoslavov</p>
                <p className={styles['review-text']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est optio omnis at quod dignissimos ipsam, sit distinctio reprehenderit qui quis rerum iste odio quia magni quam inventore repellendus excepturi!
                    Ipsum, vero tempore quo neque exercitationem debitis perspiciatis quidem! Itaque laboriosam veniam necessitatibus aliquam corporis dolores, facilis repellendus rem reprehenderit unde, provident libero quia recusandae ipsum pariatur voluptatem. Totam, modi?
                    Voluptatum iure ullam esse recusandae, nihil quod sed cupiditate maxime enim, quaerat aliquid voluptatem nesciunt asperiores porro earum ea! Corporis delectus accusantium deserunt quibusdam earum laudantium perspiciatis quam ratione fuga.
                </p>
                <hr />
            </div>
        </>
    );
}