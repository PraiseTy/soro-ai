import { Sidebar } from '../Sidebar';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
      <div className={styles.mainWrapper}>
          <div className={styles.container}>
              <Sidebar />
              <div className={styles.content}>
                <p>This is the overview page</p>
              </div>
          </div>
      </div>
    )
}
export default Dashboard;
