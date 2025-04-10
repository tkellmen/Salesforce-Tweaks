function createCollapseButton() {
    const collapseButton = document.createElement("button");
    collapseButton.className = "sidebar-toggle";
    collapseButton.innerHTML = "<div class='arrow'></div>";
    collapseButton.addEventListener("click", toggleSidebar);
    return collapseButton;
}

function toggleSidebar() {
    const tabsetBody = document.querySelector(".tabsetBody.main-content");
    if (tabsetBody) {
        tabsetBody.classList.toggle("collapsed-side-bar");
        const arrow = document.querySelector(".arrow");
        if (arrow) arrow.classList.toggle("rotated");
    }
}

function init() {
    const barPrimarySection = document.querySelector('.slds-context-bar__primary');
    if (barPrimarySection) {
        const collapseButton = createCollapseButton();
        barPrimarySection.insertAdjacentElement("afterbegin", collapseButton);
    } else {
        console.error("Salesforce Tweaks - Primary section not found.");
    }
}

function delayLoadSetup(count = 0) {
    const setupTabUl = document.querySelector(".tabBarItems.slds-grid");

    if (count > 5) {
        console.error("Salesforce Tweaks - Failed to find setup root.");
        return;
    }

    if (!setupTabUl) {
        setTimeout(() => delayLoadSetup(count + 1), 3000);
    } else {
        init();
    }
}

setTimeout(() => delayLoadSetup(), 3000);