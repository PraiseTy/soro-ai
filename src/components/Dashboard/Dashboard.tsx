import { Sidebar } from '../Sidebar';
import {ConversationCard} from "../ConversationCard";
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
      <div className={styles.mainWrapper}>
          <div className={styles.container}>
              <Sidebar />
              <div className={styles.content}>
                <div className={styles.welcome}>
                  <h1>Ẹ káàbọ̀,  Praise! 👋🏾</h1>
                  <p>Let's continue your Yoruba  learning journey.</p>
                </div>
                <div>
                  <ConversationCard />
                </div>
              </div>
          </div>
      </div>
    )
}
export default Dashboard;
