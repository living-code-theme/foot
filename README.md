<!-- living-code-readme:1 -->
# 🦶 Living Code for foot

**Calm slate. Living color.** Living Code for foot. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

<table data-lc-flavors>
<tr>
<td width="50%" valign="top">
<strong>Night</strong><br><sub>Dark · full palette</sub><br><br>
<a href="images/night.png"><img src="images/night.png" alt="foot running Living Code Night" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Frost</strong><br><sub>Dark · softer chroma</sub><br><br>
<a href="images/frost.png"><img src="images/frost.png" alt="foot running Living Code Frost" width="640"></a>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<strong>Paper</strong><br><sub>Light · near-white slate</sub><br><br>
<a href="images/paper.png"><img src="images/paper.png" alt="foot running Living Code Paper" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Signal</strong><br><sub>Dark · teal accent</sub><br><br>
<a href="images/signal.png"><img src="images/signal.png" alt="foot running Living Code Signal" width="640"></a>
</td>
</tr>
</table>

Select any preview to view the image at full size.

## Installation

```sh
flavor=night
curl -fsSL --create-dirs -o "${XDG_CONFIG_HOME:-$HOME/.config}/foot/living-code-$flavor.ini" "https://raw.githubusercontent.com/living-code-theme/foot/main/living-code-$flavor.ini"
```

Then include it at the top of `foot.ini`:

```ini
[main]
include=~/.config/foot/living-code-night.ini
```

If you set `XDG_CONFIG_HOME`, use that path in the `include` line.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

<p><a href="images/night.png"><img src="images/night.png" alt="foot running Living Code Night" width="1280"></a></p>

Include the downloaded file at the top of `foot.ini` (adjust the path for your config directory):

```ini
[main]
include=~/.config/foot/living-code-night.ini
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

<p><a href="images/frost.png"><img src="images/frost.png" alt="foot running Living Code Frost" width="1280"></a></p>

Include the downloaded file at the top of `foot.ini` (adjust the path for your config directory):

```ini
[main]
include=~/.config/foot/living-code-frost.ini
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

<p><a href="images/paper.png"><img src="images/paper.png" alt="foot running Living Code Paper" width="1280"></a></p>

Include the downloaded file at the top of `foot.ini` (adjust the path for your config directory):

```ini
[main]
include=~/.config/foot/living-code-paper.ini
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

<p><a href="images/signal.png"><img src="images/signal.png" alt="foot running Living Code Signal" width="1280"></a></p>

Include the downloaded file at the top of `foot.ini` (adjust the path for your config directory):

```ini
[main]
include=~/.config/foot/living-code-signal.ini
```

</details>

## Configuration

See [foot's documentation](https://codeberg.org/dnkl/foot) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

Requires a foot release supporting [colors-dark] and [colors-light] (foot 1.23 or newer). Paper selects the light color theme.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/foot/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
