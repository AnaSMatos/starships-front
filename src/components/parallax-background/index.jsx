import { Container, Stars1, Stars2, Stars3 } from "./styles"
import { DistanceInput } from "../distance-input"

export const ParallaxBackground = () => {
    return(
        <Container>
            <Stars1/>
            <Stars2/>
            <Stars3/>
            <DistanceInput/>
        </Container>
    )
}