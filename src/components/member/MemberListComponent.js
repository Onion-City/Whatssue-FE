import styled from "styled-components";

import close from "../../assets/close.png";

export default function JoinComponent () {
    return(
        <MemberContent>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>문해빈</MemberName>
                    <MemberAttendanceWrapper>
                        <MemberAttendanceBox>
                            <MemberCircle></MemberCircle>
                            <MemberNum>11/19</MemberNum>
                        </MemberAttendanceBox>
                        <MemberAttendanceBox>
                            <MemberCircle2></MemberCircle2>
                            <MemberNum>1/19</MemberNum>
                        </MemberAttendanceBox>
                        <MemberAttendanceBox>
                            <MemberCircle3></MemberCircle3>
                            <MemberNum>1/19</MemberNum>
                        </MemberAttendanceBox>
                    </MemberAttendanceWrapper>
                </MemberLeftBox>
                <MemberBtnBox>
                    <img width="17px" height="17px" src={close}/>
                </MemberBtnBox>
            </MemberBox>
        </MemberContent>
    )
}


const MemberContent = styled.div`

`;

const MemberBox = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #282828;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MemberLeftBox = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    text-align:center;
    justify-content: center;

    color: #fff;
`;

const MemberName = styled.div`
    font-size: 17px;
    white-space: nowrap;
    width: 20vw;
`;

const MemberAttendanceWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const MemberAttendanceBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20vw;
`;

const MemberCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #51F8C4;
`;

const MemberCircle2 = styled(MemberCircle)`
    background-color: #D9D9D9;
`;

const MemberCircle3 = styled(MemberCircle)`
    background-color: #FF4444;
`;

const MemberNum = styled.div`
    color: #fff;
    font-size: 11px;
    margin: 0 2vw;
`;

const MemberBtnBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    text-align:center;
    justify-content: center;

    margin: 0 3vw;
    height: 100%;
`;
