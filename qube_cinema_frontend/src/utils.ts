export const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
});

export const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
});



export const formatTimeFromSeconds = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${padStart(hours)}:${padStart(minutes)}:${padStart(secs)}`;
}

const padStart = (value:number) => {
    return value.toString().padStart(2, '0');
}

export const formatSize = (bytes: number) => {
    const KB = bytes / 1024;
    if(KB >= 1024) {
        const MB = KB / 1024;
        if (MB >= 1024) {
            const GB = MB / 1024;
            return `${Math.floor(GB)} GB`;
        }
        else {
            return `${Math.floor(MB)} MB`;
        }
    }else {
        return `${Math.floor(KB)} KB`;
    }
}