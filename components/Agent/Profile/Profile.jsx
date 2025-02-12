import styles from "./profile.module.css"
import NotWorkingIcon from '../NotWorkingIcon/NotWorkingIcon';
import SocialIcons from '../SocialIcons/SocialIcons';

const Profile = () => {
    return (
        <div className={styles.profile_wrapper}>
          <div className={styles.profile_image_social_wrapper}>
            <div className={styles.profile_image_wrapper}>
              <img
                className={styles.profile_image}
                src={
                  "https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person7-21-500x328.png"
                }
                alt=""
              ></img>
            </div>
            <SocialIcons />
          </div>
          <div className={styles.profile_contact_wrapper}>
            <h3>
              <a href="https://lasvegas.wpresidence.net/estate_agent/michaela-finney/">
                Michaela Finney
              </a>
            </h3>
            <div className={styles.agent_position}>
              realtor overall rating:
              <div className={styles.numerical_rating}>4.5</div>
            </div>
            <NotWorkingIcon />
          </div>
        </div>
    );
};

export default Profile;