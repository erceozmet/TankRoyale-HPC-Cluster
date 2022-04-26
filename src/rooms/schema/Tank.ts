import { type } from "@colyseus/schema";
import { Client } from "colyseus";
import { GameObject } from "./GameObject";
import { Pistol, Weapon } from "./Weapon";

export class Tank extends GameObject {

    constructor(client: Client) {
        super("images/tank.png", 6, 6);
        this.client = client;
        this.health = 100;
        this.weapon = new Pistol();
    }

    getType(): string {
        return "tank";
    }

    last_direction: number = 0;
    client: Client;
    health: number;
    weapon: Weapon;
}
