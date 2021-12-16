import React from "react";
import * as S from "./style";
import dummy from "./dummy.json";

const StoreDetail = ({match}) =>{
    const data = dummy.data;

    console.log(match.params.storeIdx);
    //match.params.storeIdx로 상세 정보 불러옴

    return(
   <S.Container>
        <S.StoreContainer>
           <img src={data.storeImage} alt="storeimg"/>
            <S.StoreInfoTitle>
            <h1>{data.storeName}</h1>
         
            <h2><a>★</a> {data.storeGrade} {data.storeType}</h2>
            <S.IconContainer>
            <S.CallIcon/> <h3>전화</h3>
            </S.IconContainer>
            <S.IconContainer>
            <S.ShareIcon/> <h3>공유</h3>
            </S.IconContainer>
            <S.LineBorder />
            </S.StoreInfoTitle>
            <S.StoreInfo>
            <h4><S.PlaceIcon />{data.storeLocation}</h4>
            <h4><S.TimeIcon />{data.storeTime}</h4>
            <h4><S.GolfIcon />타석 수 - {data.batCount}대</h4>

            <h4><S.CardIcon />가격 정보</h4>
            
            <S.CostTable>
            <table>
                <thead>
                <tr>
                <th>시간</th> <th colspan='2'>가격</th>
                 </tr>
                </thead>
                <tbody>

                <tr>
                <th rowspan='2'>오전</th>
                <td><a>18홀</a></td>
                <td>30,000 원</td>
                 </tr>
                 <tr>
                 <td>9홀</td>
                 <td>가격2</td>
                 </tr>
                 
                 <tr>
                <th rowspan='2'>오후</th>
                <td><a>18홀</a></td>
                <td>가격1</td>
                 </tr>
                 <tr>
                 <td>9홀</td>
                 <td>가격2</td>
                 </tr>
                 

                 <tr>
                <th rowspan='2'>심야</th>
                <td><a>18홀</a></td>
                <td>가격1</td>
                 </tr>
                 <tr>
                 <td>9홀</td>
                 <td>가격2</td>
                 </tr>
                 
                 </tbody>
                </table>
                </S.CostTable>
            
            <h4><S.ServiceIcon />시설 정보</h4>
            <S.ServiceIconWrapper>
            {data.storageStatus === 1 ? <S.ServieIcon><h1>장비<br/>보관</h1></S.ServieIcon>:null}
            {data.lefthandStatus === 1 ? <S.ServieIcon><h1>왼손<br/>타석</h1></S.ServieIcon>:null}
            {data.parkingStatus === 1 ? <S.ServieIcon><h1>주차<br/>시설</h1></S.ServieIcon>:null}
            {data.groupseatStatus === 1 ? <S.ServieIcon><h1>단체<br/>가능</h1></S.ServieIcon>:null}
            {data.floorscreenStatus === 1 ? <S.ServieIcon><h1>바닥<br/>스크린</h1></S.ServieIcon>:null}
            {data.lessonStatus === 1 ? <S.ServieIcon><h1>프로<br/>교습</h1></S.ServieIcon>:null}
            </S.ServiceIconWrapper>
<br />
<br />
<br />
<br />

            </S.StoreInfo>
           
        </S.StoreContainer>
        <S.ReserveButton>간편 예약</S.ReserveButton>

    </S.Container>
    );
}

export default StoreDetail;
