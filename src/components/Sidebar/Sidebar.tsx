import { SidebarDisplay } from "./SidebarDisplay";
import { SidebarContent } from "./SidebarContent";
import styles from './Sidebar.module.scss';


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
        <p>Soro AI</p>
      </div>
      <div className={styles.navContainer}>
        {SidebarContent.map((item)=> {
          return <SidebarDisplay key={item.id} id={item.id} title={item.title} icon={item.icon} alt={item.alt}/>
        })}
      </div>
    </div>
  )
}
export default Sidebar;
