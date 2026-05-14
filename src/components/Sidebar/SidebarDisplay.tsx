import styles from './Sidebar.module.scss';

type SidebarCardProps  =  {
  id: number;
  title: string;
  icon: string;
  alt: string;
}

export const SidebarDisplay = ({id, title, icon, alt}: SidebarCardProps) => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={`${styles.sidebarItem} ${id === 2 ? styles.highlighted : ''}`}>
          <img src={icon} alt={alt}  className={styles.barIcon}/>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
