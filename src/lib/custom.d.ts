// custom.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMarqueeElement>, HTMLMarqueeElement> & {
        behavior?: string;
        direction?: string;
        scrollamount?: number;
      };
    }
  }
  