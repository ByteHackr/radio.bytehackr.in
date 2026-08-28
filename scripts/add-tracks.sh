#!/usr/bin/env bash
# Add a YouTube video or playlist to ByteHackr's Radio.
#
#   ./scripts/add-tracks.sh --list
#   ./scripts/add-tracks.sh bengali 'https://youtu.be/XXXXXXXXXXX'
#   ./scripts/add-tracks.sh relax 'https://www.youtube.com/playlist?list=PLxxxx'
#   ./scripts/add-tracks.sh --new lofi --label "Lofi Beats" --emoji 🌙 'https://www.youtube.com/playlist?list=PLxxxx'
#
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "add-tracks: node is required (v18+)." >&2
  exit 1
fi

exec node "$ROOT/scripts/add-tracks.mjs" "$@"
