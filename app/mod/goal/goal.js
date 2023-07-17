export class Mod extends ModBase
{
    onInit()
    {
        this.update()
    }


    update()
    {
        this.outputElement.innerHTML = `
            <div class="description">${this.conf.description}</div>
            <div class="status">
                <span class="value">${this.conf.value}</span> /
                <span class="target">${this.conf.target}</span>
                <span class="unit">${this.conf.unit}</span>
            </div>
            <div class="progressbar">
                <div style="width: ${(this.conf.value / this.conf.target) * 100}%;"></div>
            </div>
        `
    }
}
