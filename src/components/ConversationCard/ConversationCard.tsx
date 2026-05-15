import styles from './ConversationCard.module.scss';
import {microphoneLargeIcon, keyboardIcon} from '../../assets/svg';

const ConversationCard = () => {
    return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.avatar}></div>
           <div className={styles.tutor}>
               <p>Conversation with Atinuke</p>
               <div>  <p>AI Tutor</p></div>
           </div>
        </div>
        <div>
            <div className={styles.tutorHeader}>
                <div className={styles.tutorProfile}></div>
                <div className={styles.tutorMessage}>Ṣé àlàáfíà ni “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.” “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.” “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.” “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.”</div>
            </div>
            <div className={styles.studentHeader}>
                <div className={styles.studentProfile}></div>
                <div className={styles.studentMessage}>Mo wa daadaa. Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjàs</div>
            </div>
            {/*To remove later when chat functionality is implemented*/}
            <div className={styles.tutorHeader}>
            <div className={styles.tutorProfile}></div>
            <div className={styles.tutorMessage}>Ṣé àlàáfíà ni</div>
            </div>
            {/*for microphone button*/}
            <div className={styles.microphoneContainer}>
                <div className={styles.keyboardButton}>
                    <img src={keyboardIcon} alt="keyboard icon"/>
                </div>
                <div className={styles.visualizerBars}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.microphoneButton}>
                    <img src={microphoneLargeIcon} alt="microphone icon" className={styles.microphoneIcon}/>
                </div>
                <div className={styles.visualizerBars}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ConversationCard;
