import { TextureLoader } from 'three'

import { 
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg 
} from './images'


export const dirtTexture = new TextureLoader().load(dirtImg)
export const logTexture = new TextureLoader().load(logImg)
export const grassTexture = new TextureLoader().load(grassImg)
export const glassTexture = new TextureLoader().load(glassImg)
export const woodTexture = new TextureLoader().load(woodImg)
export const groundTexture = new TextureLoader().load(grassImg)