export default function formatDuration(duration: number | undefined): string {
  if (duration) {
    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Etc/UTC',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const formatted = dateFormatter
      .format(new Date(duration * 1000))
      .substr(duration >= 3600 ? 0 : 3);

    return formatted;
  }

  return '00:00';
}
