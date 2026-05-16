import {VoiceBox} from "../VoiceBox";

import styles from './ConversationCard.module.scss';

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
        <div className={styles.conversation}>
            <div className={styles.tutorHeader}>
                <div className={styles.tutorProfile}></div>
                <div className={styles.tutorMessage}>
                 <div> Ṣé àlàáfíà ni “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.” “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.” “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.” “Bá mi wá ọmọ mi, ó sọ̀nù ní ọjà.”</div>
                <div>(How are you? Help me look for my child, He got lost in the market) </div>
            </div>
            </div>
            <div className={styles.studentHeader}>
                <div className={styles.studentProfile}></div>
                <div className={styles.studentMessage}>
                    <div>Mo wa daadaa. Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjà Ó sọ̀nù ní ọjàs</div>
                    <div>( I am fine.  He got lost in the market )</div>
                </div>
            </div>
            {/*To remove later when chat functionality is implemented*/}
            <div className={styles.tutorHeader}>
                <div className={styles.tutorProfile}></div>
                <div className={styles.tutorMessage}>
                    <div> Ṣé àlàáfíà ni</div>
                    <div>( How are you? ) </div>
                </div>
            </div>
            {/*for microphone button*/}
            <div className={styles.voiceContainer}>
                <VoiceBox />
            </div>
        </div>
    </div>
    )
}
export default ConversationCard;
