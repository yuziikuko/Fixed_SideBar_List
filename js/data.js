/**
 * js/data.js
 */
// 侧边栏对象
const LEFT_BAR = [
  {
    id: "address",
    content_id: "address_content",
    title: "Address",
    icon: "address",
    is_active: true,
  },
  {
    id: "user",
    content_id: "user_content",
    title: "User",
    icon: "user",
    is_active: false,
  },
  {
    id: "form",
    content_id: "form_content",
    title: "Form",
    icon: "form",
    is_active: false,
  },
  {
    id: "notification",
    content_id: "notification_content",
    title: "Notification",
    icon: "notification",
    is_active: false,
  },
  {
    id: "lib",
    content_id: "lib_content",
    title: "Libruary",
    icon: "lib",
    is_active: false,
  },
];

// 问题列表对象
const RIGHT_LIST = [
  {
    id: "address_content",
    title: "Address",
    questions: [
      {
        id: "1",
        title: "What...?",
        contents: `
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ol>`,
      },
      {
        id: "2",
        title: "Why...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "3",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "4",
        title: "Which...?",
        contents: `
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ul>`,
      },
      {
        id: "5",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "6",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "7",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
    ],
  },
  {
    id: "user_content",
    title: "User",
    questions: [
      {
        id: "1",
        title: "What...?",
        contents: `
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ol>`,
      },
      {
        id: "2",
        title: "Why...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "3",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "4",
        title: "Which...?",
        contents: `
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ul>`,
      },
    ],
  },
  {
    id: "form_content",
    title: "Form",
    questions: [
      {
        id: "1",
        title: "What...?",
        contents: `
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ol>`,
      },
      {
        id: "2",
        title: "Why...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "3",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "4",
        title: "Which...?",
        contents: `
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ul>`,
      },
    ],
  },
  {
    id: "notification_content",
    title: "Notification",
    questions: [
      {
        id: "1",
        title: "What...?",
        contents: `
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ol>`,
      },
      {
        id: "2",
        title: "Why...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "3",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "4",
        title: "Which...?",
        contents: `
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ul>`,
      },
    ],
  },
  {
    id: "lib_content",
    title: "Libruary",
    questions: [
      {
        id: "1",
        title: "What...?",
        contents: `
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ol>`,
      },
      {
        id: "2",
        title: "Why...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "3",
        title: "How...?",
        contents: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
        </p>`,
      },
      {
        id: "4",
        title: "Which...?",
        contents: `
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in aliquam ex quod distinctio? Architecto, repellat illum fuga laudantium earum quo dolore corrupti voluptatem quae magnam, sunt recusandae, nam ad.
          </li>
        </ul>`,
      },
    ],
  },
];
