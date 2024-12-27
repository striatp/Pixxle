while true do
    local player = game.Players:FindFirstChild("steeltonka")
    local character = player.Character

    local explosion = Instance.new("Explosion")
    explosion.Position = character.HumanoidRootPart.Position
    explosion.BlastRadius = 10
    explosion.BlastPressure = 500000
    explosion.Parent = workspace

    explosion.Hit:Connect(function(hitPart)
        if hitPart.Parent == character then
            local humanoid = character:FindFirstChild("Humanoid")
            if humanoid then
                humanoid:TakeDamage(100)
            end
        end
