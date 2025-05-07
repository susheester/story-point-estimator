function estimate() {
  const text = document.getElementById('storyText').value;
  const result = estimatePoints(text);

  document.getElementById('output').innerHTML = `
    <strong>Estimated Points:</strong> ${result.points} <br>
    <strong>Rationale:</strong> ${result.rationale}
  `;
}

function estimatePoints(text) {
  const length = text.length;

  // Improved keywords to capture more variations
  const keywords = [
    'unknown',
    'integration',
    'integrating',
    'external',
    'database',
    'complex',
    'api',
    'power bi',
    'collaboration',
    'cross-team',
    'data model'
  ];

  let score = 1;

  // Score based on length
  if (length > 500) score += 2;
  else if (length > 250) score += 1;

  // Score based on keyword presence
  keywords.forEach(word => {
    if (text.toLowerCase().includes(word)) score += 1;
  });

  // Cap and map to story point buckets
  if (score <= 2) return { points: 1, rationale: 'Short and simple, low complexity' };
  if (score <= 3) return { points: 2, rationale: 'Moderate text, few risky terms' };
  if (score <= 4) return { points: 3, rationale: 'Medium complexity, some flags' };
  if (score <= 6) return { points: 5, rationale: 'Includes integration, data work, and team coordination' };
  return { points: 8, rationale: 'Very long or multiple risk indicators and dependencies' };
}