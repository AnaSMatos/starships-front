import { InputContainer, RocketImg, Title, DistanceInputContainer } from "./styles"
import Rocket from './../../assets/rocket.png'

export const DistanceInput = () => {
    return (
        <InputContainer>
            <RocketImg src={Rocket}/>
            <Title>
                Quantas paradas?
            </Title>
            <p>Insira a distância a ser percorrida (MGA)</p>
            <DistanceInputContainer>
                <input type="text" />
                <div>
                    buscar
                </div>
            </DistanceInputContainer>
        </InputContainer>
    )
}