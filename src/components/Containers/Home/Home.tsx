import React from "react"
import styled from "styled-components"
import Image from "../../image"

export default () => (
  <StyledHome>
    <StyledHero>
      <StyledWelcome>
        <h2>העתיד שאתה בא ממנו</h2>
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים. קלאצי נולום ארווס סאפיאן - פוסיליס
          קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
          למסון בלרק - וענוף לורם איפסום דולור סיט אמט, לורם איפסום דולור סיט
          אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס
          וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום
          סוליסי טידום בעליק. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
          צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. הועניב
          היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה
          מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם
          הכייר וק.
        </p>
      </StyledWelcome>
      <StyledLogo>
        <Image />
      </StyledLogo>
    </StyledHero>
  </StyledHome>
)

const StyledHome = styled.section`
  display: flex;
  flex-direction: row-reverse;
`

const StyledHero = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  flex: 0.66;
`
const StyledLogo = styled.div`
  display: flex;
  flex: 0.34;
`
