// Verified product copy. Sources and boundaries: docs/terminology.md
export const content = {
  en: {
    kicker: 'MAKE YOUR INPUT PART OF THE PICTURE',
    title: ['Every keystroke.', 'Every click. Seen.'],
    summary:
      'Give your audience the missing half of the demo. Show keys, mouse buttons and click ripples right on screen, while you work as usual.',
    category: 'Keyboard and mouse overlay for Windows',
    intro: ['Show the how,', 'not just the result.'],
    introText:
      'A shortcut makes sense when viewers can see the keys. A click is easier to follow when it leaves a visual cue.',
    features: [
      [
        '01 / KEYCAPS',
        'A little feedback for every press.',
        'Keycaps sink on press, bounce back on release, then fade. Repeated presses get a ×N badge, and combinations stay together.',
        'Press & release · Repeat count · Key combinations',
      ],
      [
        '02 / KEYBOARD',
        'Your whole layout, lit as you type.',
        'Choose from five US keyboard layouts: 104, 87 TKL, 75, 68 (65%) and 61 (60%). Pressed keys light up in the wireframe.',
        'Five layouts · Key highlights · Adjustable position',
      ],
      [
        '03 / MOUSE',
        'Let every click leave a clue.',
        'Left is blue, right is red, middle is amber, and side buttons are purple. Ripples mark the click position; a capsule shows wheel direction.',
        'Button colors · Click ripples · Wheel capsule',
      ],
      [
        '04 / OVERLAY',
        'In the picture. Out of your way.',
        'The transparent, always-on-top overlay spans the virtual desktop, passes clicks through and does not take focus. Tune its elements from the tray.',
        'Click-through · Multiple monitors · Live settings',
      ],
    ],
    steps: [
      [
        'Install and open',
        'Download the Windows x64 installer. Launch KeySplera and find its icon in the system tray.',
      ],
      [
        'Make it yours',
        'Open Settings from the tray. Adjust size, opacity, visibility and position for the elements you need.',
      ],
      [
        'Start your demonstration',
        'Type and click as usual. Check your recorder’s preview to confirm the overlay is included.',
      ],
    ],
    faq: [
      [
        'Will the overlay block clicks?',
        'The overlay is click-through and does not take focus. Input continues to reach the application underneath.',
      ],
      [
        'Can I choose a smaller keyboard layout?',
        'Yes. Five US layouts are documented: 104, 87 TKL, 75, 68 (65%) and 61 (60%). Fn is drawn on compact layouts, but firmware handles that key so it cannot light up.',
      ],
      [
        'Why are clicks missing in an administrator window?',
        'Windows can prevent a non-elevated process from observing input in elevated windows. KeySplera needs matching administrator privileges for that case.',
      ],
      [
        'Does it work across monitors?',
        'The overlay spans the virtual desktop. The release notes warn that mixed display scaling can cause small offsets in ripple positions.',
      ],
      [
        'Can I use it with my screen recorder?',
        'The overlay is designed for recording and demonstrations. Verify it in your recorder’s preview, since capture modes can differ.',
      ],
    ],
    limits: [
      'Windows 10 / 11, 64-bit.',
      'Elevated windows require matching administrator privileges.',
      'Mixed display scaling may offset click ripples.',
      'White wireframe elements read best on dark backgrounds.',
    ],
    shortcuts: [
      ['Settings…', 'Open from the system tray to adjust each element.'],
      ['Show / Hide', 'Toggle the overlay from the tray menu.'],
      ['Quit', 'Exit KeySplera from the tray menu.'],
    ],
    changelog:
      'v0.1.0 · September 30, 2026. The first public release includes keycaps, five wireframe keyboard layouts, a wireframe mouse, click ripples, a wheel capsule and tray settings.',
  },
  'zh-cn': {
    kicker: '让操作，也成为画面的一部分',
    title: ['每次按键，', '每次点击，都看得见。'],
    summary: '让观众看懂画面背后的操作。按键、鼠标按钮与点击涟漪实时呈现，照常操作，演示自然清楚。',
    category: 'Windows 键鼠可视化覆盖层',
    intro: ['看见结果，', '也看懂操作。'],
    introText: '快捷键有了可见的按键，点击有了清楚的落点。把操作的过程，也交给观众。',
    features: [
      [
        '01 / 键帽',
        '每一次按下，都有回应。',
        '按下下沉，松开回弹、淡出；重复按键显示 ×N 计数，组合键并排呈现，观众轻松跟上。',
        '按下与松开 · 重复计数 · 组合键',
      ],
      [
        '02 / 键盘',
        '整个配列，随输入点亮。',
        '支持五种美式配列：104、87 TKL、75、68（65%）和 61（60%）。按下的键在线框键盘上高亮。',
        '五种配列 · 按键高亮 · 位置可调',
      ],
      [
        '03 / 鼠标',
        '每次点击，都留下线索。',
        '左键蓝、右键红、中键琥珀、侧键紫；点击涟漪标出落点，滚轮胶囊提示滚动方向。',
        '按键分色 · 点击涟漪 · 滚轮胶囊',
      ],
      [
        '04 / 覆盖层',
        '出现在画面里，让操作照常。',
        '透明置顶覆盖层跨越虚拟桌面，点击穿透、不抢焦点。通过托盘设置，按需调整各部件。',
        '点击穿透 · 多显示器 · 设置实时生效',
      ],
    ],
    steps: [
      ['安装并打开', '下载 Windows x64 安装包，启动 KeySplera，在系统托盘找到它的图标。'],
      ['调成适合你的样子', '从托盘打开设置，调整所需部件的大小、不透明度、显隐与位置。'],
      ['开始你的演示', '照常输入和点击，并在录屏工具预览中确认覆盖层已经被收录。'],
    ],
    faq: [
      ['覆盖层会挡住点击吗？', '覆盖层支持点击穿透，不抢焦点；输入会继续到达下方的应用。'],
      [
        '可以选择紧凑键盘吗？',
        '可以。已公布五种美式配列：104、87 TKL、75、68（65%）和 61（60%）。紧凑配列会画出 Fn，但该键由固件处理，无法点亮。',
      ],
      [
        '为什么管理员窗口里的操作没有显示？',
        'Windows 可能阻止普通进程读取管理员窗口中的输入；这种情况需要 KeySplera 具有相应的管理员权限。',
      ],
      ['支持多个显示器吗？', '覆盖层跨越虚拟桌面。发布说明提示：混合缩放比例下，涟漪位置可能出现细微偏差。'],
      ['能配合我的录屏软件使用吗？', '覆盖层面向录屏与演示设计。不同录屏模式可能有所差异，建议先在录屏预览中确认。'],
    ],
    limits: [
      'Windows 10 / 11，64 位。',
      '管理员窗口中的输入需要相应的管理员权限。',
      '多屏混合缩放时，点击涟漪可能有轻微偏移。',
      '白色线框元素在深色背景上更清楚。',
    ],
    shortcuts: [
      ['设置…', '从系统托盘打开，调整各个部件。'],
      ['显示 / 隐藏', '通过托盘菜单切换覆盖层显隐。'],
      ['退出', '通过托盘菜单退出 KeySplera。'],
    ],
    changelog:
      'v0.1.0 · 2026 年 9 月 30 日。首个公开版本提供键帽、五种线框键盘配列、线框鼠标、点击涟漪、滚轮胶囊和托盘设置。',
  },
};
