


class MovingTile {
    tile: Image
    x: number = 80
    y: number = 60
    vx: number = 0
    vy: number = 0

    // Example usage
 movingTile = new MovingTile(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    ...........ccccc66666...........
`) 


    private readonly MAX_VELOCITY = 200  // pixels/sec
 
    constructor(tile: Image) {
        this.tile = tile
        this.movingTile.tile = tile

        // Render the tile every frame
        scene.createRenderable(scene.TILE_MAP_Z, () => {
            screen.drawImage(this.tile, this.x, this.y)
        })

        // Update movement every frame
        let lastTime = control.millis() / 1000  // seconds

        game.onUpdate(() => {
            const now = control.millis() / 1000
            const dt = now - lastTime
            lastTime = now

            // Update position
            this.movingTile.x += this.movingTile.vx * dt
            this.movingTile.y += this.movingTile.vy * dt
        })
    }

    setVelocity(vx: number, vy: number) {
        this.vx = vx
        this.vy = vy
    }
}

