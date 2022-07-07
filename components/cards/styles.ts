import styled from 'styled-components'

const Container = styled.section`
width:90%;
height: 500px;
max-width: 340px;
background-color: var(--very-dark-card);
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
border-radius: 8px;
`
const BoxContent = styled.div`
    width:90%;
    height:40%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const Image = styled.img`
width:90%;
height: 50%;
border-radius: 8px;
`
const Title = styled.h2`
font-weight: 600;
margin-top: 15px;
font-size:18px;
`

const Description = styled.p`
font-size:16px;
font-weight: 300;
color: var(--soft-blue);

`
const TagInformations = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
.price{
    color:var(--cyan);
    display:flex;
    align-items:center;
}
.time{
    display:flex;
    align-items: center;
    color:var(--soft-blue)
}
`
const Line = styled.div`
    border: .3px solid var(--very-dark-line);
`
const Copyright = styled.div`
display:flex;
align-items: center;
h3{
    font-size: 16px;
    color:var(--soft-blue);
    display:flex;
    align-items: center;
    font-weight: 300;
}
p{
    font-size: 16px;
    margin-left: 10px;
    font-weight: 300;
}
img{
    width:30px;
    height:30px;
    margin-right: 10px;
    border:1px solid var(--white);
    border-radius: 180px;
}
`
export {Container, BoxContent,Image, Title,TagInformations,Description,Line,Copyright }