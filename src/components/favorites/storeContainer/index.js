import React from "react";
import * as S from "./style";
import {Link} from "react-router-dom";

const StoreContainer = ({data}) =>{
    console.log('a');
    return(
   <S.Container>
        {data.map(d=>(
        <S.StoreContainer>
            <Link to={`/store/${d.storeIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
           <img src={d.storeImage} alt="storeimg"/>
            <S.TextWrapper>
            {d.reserveStatus === true ?  <h4>당일 예약</h4>: null}
            {d.couponStatus === true ?   <h5>할인 쿠폰</h5>: null}
            <h1>{d.storeName}</h1>
            <h2>{d.storeType}</h2>
            <h3>{d.storeCost.toLocaleString('ko-KR')} 원</h3>
            </S.TextWrapper>
            </Link>
        </S.StoreContainer>
))}
    </S.Container>
    );
}

export default StoreContainer;
