import {Sidebar} from '../Sidebar';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
    <div className={styles.container}>
        <Sidebar />
        <p>This is the overview page</p>
    </div>
    )
}
export default Dashboard;
