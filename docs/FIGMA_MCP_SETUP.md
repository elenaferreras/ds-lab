# Figma MCP setup for ds-lab

The `figma-sync` skill needs **two** MCP connections:

| Server | URL | Role |
|--------|-----|------|
| `figma-desktop` | `http://127.0.0.1:3845/mcp` | Read design context from Figma Desktop (Dev Mode MCP) |
| `figma` (remote) | `https://mcp.figma.com/mcp` | **Write** to canvas via `use_figma` (OAuth) |

## 1. Cursor configuration

This repo includes [`.cursor/mcp.json`](../.cursor/mcp.json) with both servers.

If you use a global config (`~/.cursor/mcp.json`), merge the same block:

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    },
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Recommended:** In Cursor chat, run:

```text
/add-plugin figma
```

That installs the official Figma plugin (MCP + skills + OAuth flow).

## 2. Figma Desktop (read)

1. Open **Figma Desktop** (latest version).
2. **Figma menu → Preferences → Enable Dev Mode MCP Server**.
3. Open [DS-Lab-Components](https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components).
4. You need **edit** access on the file for write workflows.

## 3. Figma remote (write)

1. In Cursor: **Settings → MCP** → enable **figma** (remote).
2. Click **Connect** and complete OAuth (**Allow access**).
3. Confirm a green status dot for both `figma-desktop` and `figma`.

Without `figma` remote + `use_figma`, agents can only **audit** the file, not add variants or update Documentation frames.

## 4. Verify

After restarting Cursor, ask the agent:

```text
List available Figma MCP tools. Confirm use_figma is present.
```

Then run a scoped sync:

```text
Run figma-sync for Button only — add Link boolean (not Variant=link) with zero horizontal padding.
File: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components?node-id=0-1
```

## Requirements for write

- **Full seat** on Figma (Dev seat = read-only for MCP write).
- Edit permission on DS-Lab-Components.
- Font **Overused Grotesk** available in Figma Desktop if the plugin creates text layers.

## References

- [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/)
- [Write to canvas (`use_figma`)](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/)
- [Remote server installation (Cursor)](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
