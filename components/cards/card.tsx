import {Container, BoxContent,Image, Title,TagInformations,Description,Line,Copyright } from './styles'

const Card = () => {
    return (
        <Container>   
           <Image src="/images/image-equilibrium.jpg" alt='illustration nft'></Image> 
           <BoxContent>
           <Title>Equilibrium &#35;3429</Title>
           <Description>Our Equilibrium collection promotes balance and calm.</Description>
           <TagInformations>
           <span className='price'><img src='/images/icon-ethereum.svg' alt='eth simbol' style={{marginRight: "10px"}}/> 0.041 ETH </span>  
           <span className='time'><img src='/images/icon-clock.svg' alt='clock simbol' style={{marginRight: "10px"}}/> 3 days left </span>
           </TagInformations>
           <Line/>
           <Copyright>
           <img src='/images/image-avatar.png' alt='profile image'/>
           <h3>Creation of <p>Jules Wyvern</p></h3>   
           </Copyright>
           </BoxContent>
        </Container>
    )
}
export default Card